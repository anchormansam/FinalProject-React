import React from "react";
import "./Add.css";
import axios from "axios";
import CreateBag from "../Bag/Create";


export default class AddToBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          brands: [],
          plastics: [],
          discs: [],
          mybags: [],
          user_id: "",
          mybags_id: "",
          discs_id: "",
          name: "",

        }
       
        this.handleInputChange = this.handleInputChange.bind(this);
        this.brandsRetrieve = this.brandsRetrieve.bind(this);
        this.plasticsRetrieve = this.plasticsRetrieve.bind(this);
        this.discsRetrieve = this.discsRetrieve.bind(this);
        this.bagRetrieve = this.bagRetrieve.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        // const value = target.value;
        // const name = target.name;
    }

    componentDidMount() {
        this.brandsRetrieve();
        this.plasticsRetrieve();
        this.discsRetrieve();
        this.bagRetrieve();
      }
      
      brandsRetrieve() {
        axios.get("http://127.0.0.1:8000/api/brand").then(res => {
          console.log('brand', res);
          
          const d = res.data.data;
          this.setState({ brands: d.brands });
        });
      }
      
      plasticsRetrieve() {
        axios.get("http://127.0.0.1:8000/api/plastic").then(res => {
          console.log('plastic', res);
          
          const d = res.data.data;
          this.setState({ plastics: d.plastics}); 
        });
      }
      
      discsRetrieve(){
        axios.get("http://127.0.0.1:8000/api/disc").then(res => {
          const d = res.data;
          console.log('discs', d);
          this.setState({ discs: d}); 
        });
        
      }
      
      bagRetrieve(){
        
        var userData = JSON.parse(localStorage.getItem("user"));
        console.log('user ' + userData.id);
        
        axios.get("http://127.0.0.1:8000/api/mybag/" + userData.id).then(res => {
            const d = res.data;
            console.log('bag', d);
            this.setState({ mybags: d}); 
          });

    }
    
    async handleClick(event) {
    event.preventDefault();
        
    var config = {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        };
        var discBagged = {
            user_id: this.state.user_id,
            mybags_id: this.state.mybags_id,
            discs_id: this.state.discs_id,
            name: this.state.name,
        }
        
        await axios.post("http://127.0.0.1:8000/api/mybagofdiscs", discBagged, config).then(res => {
            
        });
    };
   
    render() {
        return (
          <div id="container">
            <CreateBag />
            <p>
                Add Disc to Bag
            </p>
            <form onSubmit={(e) => this.handleClick(e)}>
           
            <select 
            name="brands"
            onChange={this.handleInputChange}>
            <option value={this.state.brands} disabled selected>Select Brand</option>
            {this.state.brands
              ? this.state.brands.map((item, key) => (
                <option value={item.id} key={key}>
                    {item.brand}
                  </option>
                ))
                : null}
          </select>
          <br />
            <select 
            name="plastics"
            onChange={this.handleInputChange}>
            <option value={this.state.plastics} disabled selected>Select Plastic</option>
            {this.state.plastics
              ? this.state.plastics.map((item, key) => (
                <option value={item.id} key={key}>
                    {item.plastic}
                  </option>
                ))
                : null}
          </select>
          <br />
            <select 
            name="discs"
            onChange={this.handleInputChange}>
            <option value={this.state.discs} disabled selected>Select Disc</option>
            {this.state.discs
              ? this.state.discs.map((item, key) => (
                <option value={item.id} key={key}>
                    {item.name}
                  </option>
                ))
                : null}
          </select>
          <br />
            <select 
            name="mybags"
            onChange={this.handleInputChange}>
            <option value={this.state.mybags} disabled selected>Select Bag</option>
            {this.state.mybags
              ? this.state.mybags.map((item, key) => (
                <option value={item.id} key={key}>
                    {item.name}
                  </option>
                ))
                : null}
          </select>
               <button type="submit" >Add to Bag</button>
            </form>
          </div>
        );
      }
}