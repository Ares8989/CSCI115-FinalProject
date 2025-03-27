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
    createReviewObj(reviewName, ratings);
    return i++;
}

function upvoteReview(index, ratings){
    ratings[index].popularity++;
    return;
}

function downvoteReview(index, ratings){
    ratings[index].popularity--;
    return;    
}

function createReviewObj(reviewName, ratings){
    reviewObj={
        name: reviewName,
        popularity: 0
    }
    ratings.push(reviewObj);
    return;
}