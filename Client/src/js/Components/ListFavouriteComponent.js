var React = require('react');
var FavouriteDisplay= require('./FavouriteDisplay.js');
var ListFav = React.createClass({
  getInitialState:function()
  {
    return {
      Ndata:[]
    }
  },
  getNews: function(obj){
    if(!obj){
      obj={};
    }
        $.ajax({
            url:"http://localhost:8090/news/get",
            type:'POST',
            data:obj,
            dataType: 'JSON',
            success: function(data) {
             this.setState({Ndata:data});
           }.bind(this),
             error:function(err){
                 console.log(err);
             }.bind(this)
        });
    },
  componentDidMount:function() {
    this.getNews();
  },
   render:function(){
     var News;
     if(this.state.Ndata.length==0)
     {
      News =  <h1>No favourite news added</h1>
     }
     else {
        News = this.state.Ndata.map(function(news) {
         return (<FavouriteDisplay  newsObj={news}  ></FavouriteDisplay>
         );
        });
     }
     return(
       <div>
        {News}
       </div>
       )
   }
   });
module.exports = ListFav;
