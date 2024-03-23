import { useEffect, useState } from 'react'
import Graph1 from '../assets/Graph1.svg'
import Graph2 from '../assets/Graph2.svg'
import Graph3 from '../assets/Graph3.svg'
import Graph4 from '../assets/Graph4.svg'
import Pointer1 from '../assets/Pointer1.svg'
import Pointer2 from '../assets/Pointer2.svg'
import Pointer3 from '../assets/Pointer3.svg'
import Pointer4 from '../assets/Pointer4.svg'

function Card(props) {
    const { children, title, graph, pointer, pointerValue, bearish, neutral, bullish } = props;

    const [Graph, setGraph] = useState({})
    useEffect(() => {
        switch (graph) {
            case 1: {
                setGraph({ graph: Graph1, pointer: Pointer1 })
                break;
            }
            case 2: {
                setGraph({ graph: Graph2, pointer: Pointer2 })
                break;
            }
            case 3: {
                setGraph({ graph: Graph3, pointer: Pointer3 })
                break;
            }
            case 4: {
                setGraph({ graph: Graph4, pointer: Pointer4 })
                break;
            }
        }
    })


    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <p><b>{title}</b></p>
                    <p>ⓘ</p>
                </div>
                <div className='graph-container'>
                    <img className='graph' src={Graph.graph} alt="" />
                    <img style={{ left: (pointerValue * 1) + '%' }} className='pointer' src={Graph.pointer} alt="" />
                </div>

                <div style={bearish && { visibility: 'visible' }} className='tag-container'>
                    <div>
                        <p>{bearish}</p>
                        <p className='tag tag-1'>Bearish</p>
                    </div>
                    <div>
                        <p>{neutral}</p>
                        <p className='tag tag-2'>Neutral</p>
                    </div>
                    <div>
                        <p>{bullish}</p>
                        <p className='tag tag-3'>Bullish</p>
                    </div>
                </div>
                {!children ?
                    <div className='card-value-container'>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                        <div>
                            <p><b>22074.34</b></p>
                            <p>EMA(20)</p>
                        </div>
                    </div>
                    :
                    children
                }
            </div>
        </>
    )
}

export default Card;