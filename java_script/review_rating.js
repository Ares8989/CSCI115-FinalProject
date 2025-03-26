ratings=[];//make an array to hold the ratings of the reviews

function findIndex(reviewName){
    let i=0;
    for (; i < ratings.length;i++){
        if (ratings[i].name==reviewName){
            return i;//return the index of the array where the review was found
        }
    }
    createReviewObj(reviewName);
    return i++;
}

function upvoteReview(reviewName){

}

function downvoteReview(reviewName){
    
}

function createReviewObj(reviewName){
    reviewObj={
        name: reviewName,
        popularity: 0
    }
}