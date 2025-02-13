import classNames from "classnames"
export default function Cards({YPosition, i}){
    const boxClass = YPosition >= window.innerHeight + i*205 - 410? classNames('box', 'show') : 'box'
    return(
        <div key={i} className={boxClass}><h2>Content</h2></div>
    )
}