var React=require('react');

var NewsDisplayBox=React.createClass({

  addMovies(){
    alert("hello");
    var newsToStore=this.props.movieObj;
    $.ajax({
      url:'http://localhost:8080/movies/add',
      type: 'POST',
      data:movieToStore,

      success: function(data)
      {
       alert(data);
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div className="container" id="movieElement">
      <div style={{backgroundColor:'#CCCCCC'}} className="row">
      <div className="col-xs-4">
      <div >
      <img style={{width: 350, height: 400}} src={this.props.urlToImage}></img></div>
      </div>
      <div className="col-xs-8">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div style={{fontSize:'30px'}}>
      <h3>{this.props.title}</h3>
      </div>
      <div className="form-group form-group-sm">
    <label className="col-sm-2 control-label" htmlFor="formGroupInputLarge">Desciprion:</label>
    <div className="col-sm-10">
    <input className="form-control" id="disabledInput" type="text" placeholder={this.props.description} disabled></input><p></p>
    </div>
    </div>
    <div className="form-group form-group-sm">
  <label className="col-sm-2 control-label" htmlFor="formGroupInputLarge">Published:</label>
  <div className="col-sm-10">
      <input className="form-control" id="disabledInput" type="text" placeholder={this.props.publishedAt} disabled></input><p></p>
  </div>
  </div>
  <div className="form-group form-group-sm">
<label className="col-sm-1 control-label" htmlFor="formGroupInputLarge"></label>
<div className="col-sm-11">
      <button onClick={this.addMovies} className="btn btn-primary btn-sm">ADD <span className="glyphicon glyphicon-check"></span></button>&emsp;&emsp;
      <a href={this.props.url}><button className="btn btn-success btn-sm">Check full News<span className="glyphicon glyphicon-eye-open"></span></button></a>
</div>
</div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <p></p>
      </div>
      </div>
      </div>
    );
  }
});

module.exports=NewsDisplayBox;
