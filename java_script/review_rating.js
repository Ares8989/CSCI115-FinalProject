function initializeRatingSystem(){
    //check if the ratings array already exists
    let ratings=readFromRatingSystem();
    if (ratings==undefined){//initialize the array if it didn't exist
        ratings=[];
        localStorage.setItem("ratingsJSON",JSON.stringify(ratings));       
    }
    return ratings;
}

function readFromRatingSystem(){
    let rawRatingsString=localStorage.getItem("ratingsJSON");
    let ratings = JSON.parse(rawRatingsString);
    return ratings;
}

function writeToRatingSystem(ratings){
    ratings.sort(function(a, b){return b.popularity - a.popularity});
    localStorage.setItem("ratingsJSON",JSON.stringify(ratings));
    return;
}

function findIndex(reviewName, ratings){
    let i=0;
    for (; i < ratings.length;i++){
        if (ratings[i].name==reviewName){
            return i;//return the index of the array where the review was found
        }
    }
    return -1;
}

function upvoteReview(reviewName, ratings){
    let index=findIndex(reviewName, ratings);
    ratings[index].popularity++;
    return;
}

function downvoteReview(reviewName, ratings){
    let index=findIndex(reviewName, ratings);
    ratings[index].popularity--;
    return;    
}

function createReviewObj(reviewName,documentName,ratings){
    let index=findIndex(reviewName, ratings);
    //this game didnt have a review already
    if (index==-1){
        reviewObj={
            name: reviewName,
            location:documentName,
            popularity: 0
        }
        ratings.push(reviewObj);
        return;
    }
    return;
}

function printTopFive(ratings){
    if(ratings[0] != undefined){
        document.getElementById("Review0").innerText=ratings[0].name;
        document.getElementById("Review0").href=ratings[0].location;
    }
    if(ratings[1] != undefined){
        document.getElementById("Review1").innerText=ratings[1].name;
        document.getElementById("Review1").href=ratings[1].location;
    }
    if(ratings[2] != undefined){
        document.getElementById("Review2").innerText=ratings[2].name;
        document.getElementById("Review2").href=ratings[2].location;
    }
    if(ratings[3] != undefined){
        document.getElementById("Review3").innerText=ratings[3].name;
        document.getElementById("Review3").href=ratings[3].location;
    }
    if(ratings[4] != undefined){
        document.getElementById("Review4").innerText=ratings[4].name;
        document.getElementById("Review4").href=ratings[4].location;
    }
    return;    
}
