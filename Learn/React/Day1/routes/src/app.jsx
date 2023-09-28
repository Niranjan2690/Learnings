import React, {Suspense, useState} from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Home from './components/home';
/* import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Error from './components/404';
import NestedComp1 from './components/blog1';
import NestedComp2 from './components/blog2'; */
import './style.css'

const App = ()=>{

    let About = React.lazy(()=>import("./components/about"));
    let Blog = React.lazy(()=>import("./components/blog"));
    let Contact = React.lazy(()=>import("./components/contact"));
    let Error = React.lazy(()=>import("./components/404"));
    let NestedComp1 = React.lazy(()=>import("./components/blog1"));
    let NestedComp2 = React.lazy(()=>import("./components/blog2"));

    let [power, setPower] = useState(0)



    return <div>
                <h1>Using Routes</h1>
                <h1>{power}</h1>
                <input type='range' onInput={(evt)=>setPower(evt.target.value)}></input>
                <BrowserRouter>
                    {/* <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li><a href='/404'>Error</a></li>
                    </ul> */}
                    {/* <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link>
                            <ul>
                                <li><Link to='/blog/blog1'>Blog1</Link></li>
                                <li><Link to='/blog/blog2'>Blog2</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/photos'>Photos</Link></li>
                        <li><Link to='/videos'>Videos</Link></li>
                    </ul> */}
                    <ul>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/about'>About</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/blog'>Blog</NavLink>
                            <ul>
                                <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/blog/blog1'>Blog1</NavLink></li>
                                <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/blog/blog2'>Blog2</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to={'/contact/'+ power}>Contact</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/photos'>Photos</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "navlink" : ""} to='/videos'>Videos</NavLink></li>
                    </ul>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<Suspense fallback={<>...Loading</>}><About /></Suspense>}/>
                        <Route path='/blog' element={<Suspense fallback={<>...Loading</>}><Blog/></Suspense>}>
                            <Route path='/blog/blog1' element={<Suspense fallback={<>...Loading</>}><NestedComp1/></Suspense>}/>
                            <Route path='/blog/blog2' element={<Suspense fallback={<>...Loading</>}><NestedComp2/></Suspense>}/>
                        </Route>                        
                        <Route path='/contact/:pow' element={<Suspense fallback={<>...Loading</>}><Contact/></Suspense>}/>
                        <Route path='*' element={<Suspense fallback={<>...Loading</>}><Error /></Suspense>}/>
                    </Routes>
                </BrowserRouter>
           </div>
}

export default App;