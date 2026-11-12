import React from 'react';
import Home from './screens/7-8';
import HomeMobile from './screens/144-448';
import Catalog from './screens/117-160';
import CatalogMobile from './screens/142-304';
import Reviews from './screens/116-86';
import ReviewsMobile from './screens/143-304';
import Menu from './screens/145-498';
import M0 from './screens/138-320';
import M1 from './screens/138-338';
import M2 from './screens/138-356';
import M3 from './screens/138-374';
import M4 from './screens/138-392';
import M5 from './screens/138-410';
import M6 from './screens/138-428';
import MM0 from './screens/142-318';
import MM1 from './screens/142-340';
import MM2 from './screens/142-362';
import MM3 from './screens/142-384';
import MM4 from './screens/142-406';
import MM5 from './screens/142-428';
import MM6 from './screens/142-450';

export const pages={home:[Home,HomeMobile],catalogo:[Catalog,CatalogMobile],avaliacoes:[Reviews,ReviewsMobile]};
export const overlays={menu:[Menu,Menu],destaque:[M0,MM0],harmonizacao:[M1,MM1],perfil:[M2,MM2],labios:[M3,MM3],lifting:[M4,MM4],rino:[M5,MM5],aptos:[M6,MM6]};
export function Page({name}:{name:keyof typeof pages}){const [Desktop,Mobile]=pages[name];return <main id="main"><div className="page-view desktop-view"><Desktop/></div><div className="page-view mobile-view"><Mobile/></div></main>}
export function Overlay({name}:{name:keyof typeof overlays}){const [Desktop,Mobile]=overlays[name];return <><div className="overlay-view desktop-view"><Desktop/></div><div className="overlay-view mobile-view"><Mobile/></div></>}
