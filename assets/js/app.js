const APIKey = `b7ab9b3a94084b3490d17234da7ad833`;
const qty = $('#qty').val() || 1;
let query = $('#query').val() || 'Roosevelt';
let begin = $('#startDate').val() || 19000101;
let end = $('#endDate').val() || 20180101;

let topArticles =$('#topArticles').empty()

function search() {
    console.log(qty)
    // console.log('searching')
 
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': APIKey,
        'q': query,
        'begin_date': begin, //YYYYMMDD
        'end_date': end,
        'page': 2,
    });
    

    

    $.ajax({url: url, method: 'GET'})
        .then(response => {
            // console.log(response.response)
            let articles = response.response.docs;
            for(let i = 0; i < qty; i++) {
                displayArticle(articles[i])
            }
        
            
        });
}
function displayArticle(article) {
    let articleDiv = $('<div>')
        .addClass('articleStyle')
        .append($('<h3>').text(article.headline.main))
        .append($('<p>').text(article.snippet))
        .append($('<a>').attr('href', article.web_url).text('View on NYT'))
    topArticles.append(articleDiv)
}
    $('#search').on('click', search)
      
        
        
