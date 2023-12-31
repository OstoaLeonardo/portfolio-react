export const KeydownEvent = () => {
    let indexCard = 0
    let previousIndex = 0

    document.querySelector('.card-0').classList.add('border-white')

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (indexCard > 0) {
                indexCard--
            } else {
                indexCard = 12
            }

            const currentCard = document.querySelector(`.card-${indexCard}`)
            const previousCard = document.querySelector(`.card-${previousIndex}`)

            toggleClasses(previousCard, currentCard)
            scrollIntoView(currentCard)
            
            previousIndex = indexCard
        }

        if (e.key === 'ArrowRight') {
            if (indexCard < 12) {
                indexCard++
            } else {
                indexCard = 0
            }

            const currentCard = document.querySelector(`.card-${indexCard}`)
            const previousCard = document.querySelector(`.card-${previousIndex}`)

            toggleClasses(previousCard, currentCard)
            scrollIntoView(currentCard)

            previousIndex = indexCard
        }
    })
}

const toggleClasses = (prev, current) => {
    prev.classList.remove('border-white')
    current.classList.add('border-white')
}

const scrollIntoView = (element) => {
    element.scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
    })
}
