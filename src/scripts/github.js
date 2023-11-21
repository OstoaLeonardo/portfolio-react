const TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const endPoint = 'https://api.github.com/graphql'
const query = `
query($userName:String!) {
    user(login: $userName){
        contributionsCollection {
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                        date
                    }
                }
            }
        }
    }
}
`

export const retrieveContributionData = async (userName = 'ostoaleonardo') => {
    const variables = `{"userName": "${userName}"}`
    const body = {
        query,
        variables
    }
    const res = await fetch(endPoint, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(body)
    })

    const data = await res.json()
    return formatData(data)
}

const formatData = (data) => {
    const { weeks } = data.data.user.contributionsCollection.contributionCalendar
    const contributions = []

    weeks.map(week => {
        week.contributionDays.map(day => {
            contributions.push(day)
        })
    })

    return contributions
}
