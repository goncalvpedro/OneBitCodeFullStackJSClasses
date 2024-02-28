const dayjs = require('dayjs')


function ageCalculator(date) {
    const birthDay = dayjs(date)
    const now = dayjs()

    const age = now.diff(birthDay, 'year')
    const nextBirthday = birthDay.add(age + 1, 'year')
    const daysForNextBday = nextBirthday.diff(now, 'days') + 1

    console.log(`Idade: ${age} anos`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')} `)
    console.log(`Próximo aniversário em ${daysForNextBday} dias`)

}

ageCalculator('1998-03-27')

