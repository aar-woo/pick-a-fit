import React from 'react';
import parseRoute from './lib/parse-route';
// import InventoryPage from './pages/inventory-page';
// import UploadPage from './pages/upload-page';
// import ArticleOptions from './components/article-options';
import PickerPage from './pages/picker-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const newRoute = parseRoute(window.location.hash);
      this.setState({
        route: newRoute
      });
    });
  }

  renderPage() {
    // const { route } = this.state;
    // if (route.path === '') {
    //   return <UploadPage />;
    // }
    // if (route.path === 'inventory') {
    //   return <InventoryPage />;
    // }
    // return <PickerPage />;
  }

  render() {
    return (
    <PickerPage />
    // <UploadPage />
    // <>
    //   {this.renderPage()}
    // </>
    );
  }
}
