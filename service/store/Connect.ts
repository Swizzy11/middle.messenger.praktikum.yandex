import Store from './Store';

export default function connect(Component, mapStateToProps) {
	return class extends Component {
		constructor(tag:string, props = {}) {
			
			const store = new Store();

			super(tag, { ...props, ...mapStateToProps(store.getState()) });

			store.on(Store.EVENT_UPDATE, () => {
				this.setProps({ ...mapStateToProps(store.getState()) });
			});
		}
	};
}
