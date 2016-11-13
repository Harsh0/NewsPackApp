var React = require('react');

var LogoutComponent = React.createClass({

  logout(){
    $.ajax({
      url:'http://localhost:8080/logout',
      type: 'POST',
      data:userObj,
      dataType:"JSON",
      success: function(data)
      {
     //  alert(data);
     console.log("Ajax login success");
       browserHistory.push('/search');
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },

  render : function () {
    return(
      <div className="container">
      <form id="NPMSearchForm" action="#">
          <button onClick={this.logout} className="btn btn-lg btn-primary btn-block">LOGOUT SUCCESSFULLY</button>
          <br></br>
      </form>
</div>
    )
  }
});

module.exports = LogoutComponent;
