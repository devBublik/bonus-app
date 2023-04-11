export const transformDate = (date) => {
    return (date.slice(5, 10).split('-').reverse().join('.'))
}