import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import doomBanner from './images/doom_hunter_banner.png';
import doomLogo from './images/doom_hunter_logo.png';
import teamLogo from './images/dread_pirate_roberts_w.png';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

const categories = [
  { key: "Lawn & Garden", value: "5yc1vZbx6k" },
  { key: "Outdoors", value: "5yc1vZbx82" },
  { key: "Storage & Organization", value:"5yc1vZas7e"},
  { key: "Closet Storage & Organization", value:"5yc1vZc1x1"},
  { key: "Closet Storage & Organization / Shoe Storage", value:"5yc1vZc89c"},
  { key: "Shoe Storage", value:"5yc1vZc1jw"},
  { key: "Dimmers", value:"5yc1vZc34i"},
  { key: "Ants", value:"5yc1vZbx4wZ1z17e6w"},
  { key: "Dimmers", value:"5yc1vZc7cc"},
  
];

class App extends Component {

  constructor(props){
    super(props);

    // this.state = {

      this.state = {
        msItemsSource: categories,
        productCount: 0,
        grdItemsSource: [],
        products: [],
        search: [],
        value: "",
        term: "",
        group: [ { field: "Category"}],
        columnDefs: [
            {headerName: "Name", field: "key"},
            {headerName: "Refinement Key", field: "value"}
        ],
        rowData: []
    }
    this.onClick = this.onClick.bind(this);
  }

  render() {

    const value = this.state.value;
    const selected = value.length;

    return (
      <div>
        <div className="App-header" style={{backgroundImage: `url(${doomBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <img src={doomLogo} alt="logo" style={{ height: '140px', alignself: 'center' }}/>
          <img src={teamLogo} alt="logo" style={{ alignself: 'end', position: 'absolute', right: '20px', height: '115px', top: '15px', opacity: '.2' }}/>
          {/* <h1 className="App-title">DOOM</h1>
          <span>Refinement Key Hunter</span> */}
        </div>

        <div className="master">

          {/* <span style={{flex: '1 1 auto', alignSelf: 'start', marginLeft: '3px', color: "#fff"}}>Enter search keys below</span> */}

          {/* <MultiSelect style={{ flex: '0 0 100%', alignSelf: 'stretch', display: 'flex', width: '100%', marginBottom: '10px'}} placeholder='Enter search terms...'
                        data={this.state.msItemsSource}
                        onChange={this.onSelectChange.bind(this)}
                        value={this.state.value}
                        textField="key"
                        dataItemKey="value"
                          /> */}

            {/* <input style={{ flex: '0 0 100%', alignSelf: 'stretch', display: 'flex', marginBottom: '10px', height: '30px'}}
                   type="text" value={this.state.term} /> */}

            <input type="text" placeholder="Enter refinement keys" value={this.state.term} onChange={ this.handleChange.bind(this) } style={{ flex: '0 0 100%', alignSelf: 'stretch', display: 'flex', marginBottom: '10px', height: '30px'}}/>

            {/* <span style={{flex: '1 1 auto', alignSelf: 'start', color: '#fff'}}>Choice Tag</span>
            <div style={{ flex: '1 0 auto', alignSelf: 'stretch', flexDirection: 'row', display: 'flex', padding: '10px', borderStyle: 'solid', borderColor: 'rgba(0,0,0,.08)', borderWidth: '1px', borderBottomWidth:'0px', backgroundColor:'#ccc', marginBottom: '10px'}}>
              
              <span style={{flex: '1 1 auto', alignSelf: 'start'}}>{this.state.term}</span>
            </div> */}
          
            

          <div style={{ flex: '1 0 auto', alignSelf: 'stretch', flexDirection: 'row', display: 'flex', padding: '10px', borderStyle: 'solid', borderColor: 'rgba(0,0,0,.08)', borderWidth: '1px', borderBottomWidth:'0px', backgroundColor:'#755D21', color: '#fff'}}>
            <span style={{flex: '1 1 auto', alignSelf: 'start'}}>Refinement Keys</span>
            {/* <a  style={{alignSelf: 'end'}} href={'https://www.homedepot.com/b/N-' + this.state.term} target='_blank'>View</a> */}
          </div>
          <Grid style={{ height: '400px', flex: '1 1 auto', alignSelf: 'stretch', display: 'flex' }}
                groupable={true} sortable={true}
                data={this.state.grdItemsSource}>
              <Column field="dimension" title="Category" width="250px" />
              <Column field="key" title="Name" width="250px" />
              <Column field="value" title="Refinement Key" width="250px" />
          </Grid>
          <div style={{ flex: '0 0 auto', alignSelf: 'stretch', flexDirection: 'row', display: 'flex', marginBottom: '20px', padding: '10px', borderStyle: 'solid', borderColor: 'rgba(0,0,0,.08)', borderWidth: '1px', backgroundColor:'#755D21', color: '#fff'}}>
            <span style={{alignSelf: 'start'}}>{this.state.grdItemsSource.length} Keys</span>
          </div>

          
          <div style={{ flex: '1 0 auto', alignSelf: 'stretch', flexDirection: 'row', display: 'flex', padding: '10px', borderStyle: 'solid', borderColor: 'rgba(0,0,0,.08)', borderWidth: '1px', borderBottomWidth:'0px', backgroundColor:'#755D21', color: '#fff'}}>
            <span style={{flex: '1 1 auto', alignSelf: 'start'}}>Matching Products</span>
            <a  style={{alignSelf: 'end'}} href={'https://www.homedepot.com/b/N-' + this.state.term} target='_blank'>View</a>
          </div>
          <Grid style={{ height: '400px', flex: '1 1 auto', alignSelf: 'stretch', display: 'flex' }}
                data={this.state.products}>
              <Column field="brand" title="Brand" width="250px" />
              <Column field="desc" title="Description" width="auto" />
          </Grid>
          <div style={{ flex: '0 0 auto', alignSelf: 'stretch', flexDirection: 'row', display: 'flex', padding: '10px', borderStyle: 'solid', borderColor: 'rgba(0,0,0,.08)', borderWidth: '1px', backgroundColor:'#755D21', color: '#fff'}}>
            <span style={{alignSelf: 'start'}}>{this.state.productCount} Products</span>
          </div>
        </div>
      </div>
    );
  }

  // Example link: https://www.homedepot.com/b/N-5yc1vZbx6kZ1z0r2rm

  createAppState(dataState) {
    return {
        //result: process(products, dataState),
        dataState: dataState
    };
  }

  dataStateChange = (event) => {
      this.setState(this.createAppState(event.data));
  }

  expandChange = (event) => {
      event.dataItem[event.target.props.expandField] = event.value;
      this.setState({
          result: Object.assign({}, this.state.result),
          dataState: this.state.dataState
      });
  }

  static getDerivedStateFromProps(props, current_state) {
        
    // Update the codes active state if it has changed.
    if (current_state.active !== props.active) {
    
        return {
          search: props.search,
          value: props.value,
          term: props.term,
          rowData: props.rowData
        }
    }

    return null;
}

  onSelectChange(e) {
    this.setState({
        value: e.target.value,
        search: e.target.value.value
    }, this.searchKeys);

    // this.searchKeys();
  }

  handleChange(e) {

    let list = [{value: e.target.value}];

    this.setState({ search: list, term: e.target.value, value: e.target.value }, this.searchKeys);
  }

  onClick(){

    this.searchKeys();
  }

  searchKeys() {

    if(this.state.value && this.state.value.length > 0) {

      // let search = "";

      // for(var i = 0; i < this.state.value.length; i++) {

      //   if(i > 0) {
        
      //     search += 'Z';
      //   }

      //   search += this.state.value[i].value;
      // }

      //this.setState({ term: search });

      axios.get(`https://api.homedepot.com/SearchNav/v2/pages/search?key=ZDpG4SI7RdBmvgS76DdIfXNBsXQle7f2&type=json&navparam=${this.state.value}&show=dimensions`).then(res => {
        
        let grid_data = [];
        let multi_data = [];
        
        if(res.data){

          for (var i = 0; i < res.data.dimensions.length; i++) {
          
            for (var n = 0; n < res.data.dimensions[i].refinements.length; n++) {
            
              let key = res.data.dimensions[i].refinements[n];

              console.log({key: key.label, value: key.refinementKey});

              grid_data.push({dimension: res.data.dimensions[i].label, key: key.label, value: key.refinementKey});

              // multi_data.push({key: res.data.dimensions[i].label + ": " + key.label, value: key.refinementKey});
              multi_data.push({key: key.label, value: key.refinementKey});
            }
          }

        }

        //this.setState({ rowData : process(list, [{ field: 'Category'}]), categories: list });
        this.setState({ grdItemsSource : grid_data, msItemsSource : multi_data });

      }).catch(err => { console.log(err)});


      axios.get(`https://api.homedepot.com/SearchNav/v2/pages/search?key=ZDpG4SI7RdBmvgS76DdIfXNBsXQle7f2&type=json&navparam=${this.state.value}&show=searchreport,skus`).then(res => {
        
        let grid_data = [];
        let product_count;
        
        if(res.data){

          product_count = res.data.searchReport.totalProducts;

          for (var i = 0; i < res.data.skus.length; i++) {
          
            grid_data.push({brand: res.data.skus[i].info.brandName, desc: res.data.skus[i].info.productLabel});
          }
        }

        this.setState({ products : grid_data, productCount: product_count });
      }).catch(err => { console.log(err)});
    }
  }
}

export default App;
