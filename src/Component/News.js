import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],    
            loading: false,
            page: 1,
            totalResults: 0,
            country: this.props.country || 'us' // Default to 'us' if no country prop is provided
        };
        document.title = `${this.capitalize(this.props.category)} - Kayamat-Tak News`;
    }

    static defaultProps = {
        category: 'general', // Default category
        country: 'us', // Default country
        apikey: 'YOUR_API_KEY', // Add your default API key here
        pagesize: 10 // Default page size
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        
        try {
            const res = await fetch(url);
            const json = await res.json();
            this.setState(prevState => ({
                articles: prevState.articles.concat(json.articles),
                loading: false,
                totalResults: json.totalResults
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    updateNews = async () => {
        this.props.progress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        
        try {
            this.props.progress(70);
            const res = await fetch(url);
            const json = await res.json();
            this.setState({
                articles: json.articles,
                loading: false,
                totalResults: json.totalResults
            });
            this.props.progress(100);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    
    async componentDidMount() {
        this.updateNews();
    }

    render() {
        return (
            <>
                <h2 className='text-center mb-5 mt-3'>
                    News - Top {this.capitalize(this.props.category)} Headlines
                </h2>
                
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row">
                            {this.state.articles.map((element) => (
                                <div className="col-md-4 mb-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        newsUrl={element.url}
                                        imageUrl={element.urlToImage}
                                        author={element.author}
                                        newsdate={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
