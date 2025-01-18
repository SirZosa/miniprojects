import { useState } from 'react'
import './App.css'
import { FaHome, FaUser, FaEnvelope, FaTimes, FaBars } from "react-icons/fa"
import classNames from 'classnames'


function App() {
  const [open, setOpen] = useState(false)

  function openFunction(){
    setOpen(true)
  }
  function closeFuction(){
    setOpen(false)
  }

  const containerClass = open ? classNames('container', 'show-nav') : 'container'
  return (
    <>
     <div className={containerClass}>
      <div className="circle-container">
        <div className="circle">
          <button onClick={() => closeFuction()} id='close'>
            <FaTimes/>
          </button>
          <button onClick={() => openFunction()} id='open'>
            <FaBars/>
          </button>
        </div>
      </div>

      <div className="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

        <h3>My Dog</h3>
        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
      </div>
    </div>

    <nav>
      <ul>
        <li><FaHome/><a href="#"> Home</a></li>
        <li><FaUser/><a href="#"> About</a></li>
        <li><FaEnvelope/><a href="#"> Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default App
