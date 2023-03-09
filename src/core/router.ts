import { render } from "./renderDOM";
import isEqual from "../utils/heplerApp/isEqual"

  class Route {
	
	component;
	path;
	block;
	props;
	tag;

	constructor(path, component, tag = 'div', props = {}) {
		this.path = path;
		this.component = component;
		this.block = null;
		this.props = props;
		this.tag = tag;
	}

	render() {

		if(!this.block)
		{
			this.block = new this.component(this.tag, this.props);
			render(this.props.rootQuery, this.block);
			return;
		}

		this.block.show();
	}

	navigate(path) {
		if (this.match(path))
			this.render();
	}

	leave(){
		if(this.block)
			this.block.hide();
	}

	match(path) {
		if(this.props.withId)
			return path.includes(this.path);
		return path == this.path;
	}
}
  
 export default class Router {

	static _instance;

	rootQuery;
	routes;
	history;
	currentRoute;

	constructor(rootQuery) {
		
		if(Router._instance)
			return Router._instance;

		this.routes = [];
		this.history = window.history;
		this.currentRoute = null;
		this.rootQuery = rootQuery;

		Router._instance = this;
	}

	use(path, component, tag = 'div', props = {}) {
		this.routes.push(new Route(path, component, tag, { ...props, rootQuery: this.rootQuery }));
		return this;
	}

	start() {
		window.onpopstate = (e => { this._onRoute(window.location.pathname) });
		this._onRoute(window.location.pathname);
	}

	go(path) {
		this.history.pushState({}, '', path);
		this._onRoute(path);
	}

	back() {
		window.history.back();
	}

	forward() {
		window.history.forward();
	}

	_onRoute(path) {

		const route = this.getRoute(path);
		
		if(!route)
			return;

		if(this.currentRoute && this.currentRoute !== route)
			this.currentRoute.leave();

		this.currentRoute = route;

		route.render();
	}

	getRoute(path) {
		return this.routes.find(route => route.match(path));
	}
}
// import Block from "../core/Block"
// import { render } from "./renderDOM";

// type StyleBackAndForward = {
//     history:any
// }

// type T = {
//     block:any;
//     render: any;
//     blockClass: any
// }
// type Props = { 
//     [key: string]: {[key: string]: string};
//     block:any;
//     render: any;
//     blockClass: any
// };

// function isEqual(lhs, rhs) {
//     return lhs === rhs;
//   }
  
//   class Route {

//     _pathname:string;
//     _blockClass: typeof Block;
//     _block: Block<T> | null
//     _props:Props;
//       constructor(pathname: string, view: any, props: any) {
//           this._pathname = pathname;
//           this._blockClass = view;
//           this._block = null;
//           this._props = props;
//       }
  
//       navigate(pathname) {
//           if (this.match(pathname)) {
//               this._pathname = pathname;
//               this.render();
//           }
//       }
  
//       leave() {
//           if (this._block) {
//               this._block.hide();
//           }
//       }
  
//       match(pathname) {
//           return isEqual(pathname, this._pathname);
//       }
  
//       render() {
//           if (!this._block) {
//               this._block = new this._blockClass("", this._props);
//               console.log(render(this._props.rootQuery as any, this._block))
//                render(this._props.rootQuery as any, this._block);
//               return;
//           }
  
//           this._block.show();
//       }
//   }
  
//  export default class Router {

//         private static __instance: Router;
//         private routes: Route[] = [];
//         private history = window.history;
//         private _currentRoute: Route | null = null;
//         private _rootQuery: string


//       constructor(rootQuery:string) {
//           if (Router.__instance) {
//               return Router.__instance;
//           }
  
//           this.routes = [];
//           this.history = window.history;
//           this._currentRoute = null;
//           this._rootQuery = rootQuery;
  
//           Router.__instance = this;
//       }
  

//       use(pathname: string, block: any) {
//           const route = new Route(pathname, block, {rootQuery: this._rootQuery});
  
//           this.routes.push(route);
  
//           return this;
//       }
  
//       start():void {
//           window.onpopstate = ((event:any) => {
//               this._onRoute(event.currentTarget.location.pathname);
//           }).bind(this);
  
//           this._onRoute(window.location.pathname);
//       }
  
//       _onRoute(pathname:string):void {
//           const route = this.getRoute(pathname);
//           if (!route) {
//             this.go("./error404")
//               return;
//           }
  
//           if (this._currentRoute && this._currentRoute !== route) {
//               this._currentRoute.leave();
//           }
  
//           this._currentRoute = route;
//           route.render();
//       }
  
//       go(pathname:string):void {
//           this.history.pushState({}, '', pathname);
//           this._onRoute(pathname);
//       }
  
//       back():void {
//           this.history.back();
//       }
  
//       forward():void {
//           this.history.forward();
//       }
  
//       getRoute(pathname:string): Route | undefined {
//           return this.routes.find(route => route.match(pathname));
//       }
//   }
