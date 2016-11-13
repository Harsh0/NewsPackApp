var React = require('react');
var NewsDisplayBox = require('./NewsDisplayBox.js');

var DisplayNews = React.createClass({
  render : function () {
    var newsArray = this.props.movieObj.map(function(news) {
      return(
        <NewsDisplayBox movieObj={news} author={news.author} title={news.title} description={news.description} publishedAt={news.publishedAt} urlToImage={news.urlToImage} url={news.url} />
      )
    });
    return(
      <div>
      {newsArray}
      </div>
    )
  }
});

module.exports = DisplayNews;
