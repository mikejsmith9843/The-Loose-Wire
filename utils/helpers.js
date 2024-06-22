function formDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
    ).getFullYear()}`;
}


modules.exports = {
    formDate
}