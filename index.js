function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork=(function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
})

const wrapAdjective=function(symbol="*"){
    return function(adjective="symbol"){
        return`You are ${symbol}${adjective}${symbol}!`
    }
}