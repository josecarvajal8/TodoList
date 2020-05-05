interface ICardProps {
    date: string,
    title: string,
    description: string,
    type: string
}
enum ErrorType {
    must = 'MUST',
    should = 'SHOULD',
    whatever = 'WHATEVER'
}