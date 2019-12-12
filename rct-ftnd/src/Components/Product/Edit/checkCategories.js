const checkCategories = (usedCategory, allCategories) => {

    let compressedCategories = [[] , []];

    allCategories.map(category => {
        if(category._id == usedCategory) {
            compressedCategories[0].push(category.name);
        } else {
            compressedCategories[1].push(category.name);
        }
    });

    return compressedCategories;
}

export default checkCategories;