const checkCategories = (usedCategory, allCategories) => {

    let compressedCategories = [[] , []];
    allCategories.map(category => {
        if(category._id == usedCategory) {
            compressedCategories[0].push({id: category._id , name: category.name});
        } else {
            compressedCategories[1].push({id: category._id , name: category.name});
        }
    });
    return compressedCategories;
}

export default checkCategories;