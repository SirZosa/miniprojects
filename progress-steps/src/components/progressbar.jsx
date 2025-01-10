export default function ProgressBar({steps, active}){
    const circleSteps = () => {
        const circles = []
        for(let i = 1; i <= steps; i++){
            if(i <= active){
                circles.push(<div key={i} className="circle active">{i}</div>)
            }
            else{
                circles.push(<div key={i} className="circle">{i}</div>)
            }
        }
        return circles
    }
    const popi = circleSteps()
    
    return(
        <div className="progress-container">
            <div className="progress" style={{width:`${(active-1)/(steps-1)*100}%`}}></div>
            {popi}
        </div>
    )
}