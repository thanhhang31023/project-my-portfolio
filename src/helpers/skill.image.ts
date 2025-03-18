
//import bootstrap from 'assets/svg/skills/bootstrap.svg';

import css from 'assets/svg/skills/css.svg';

//import docker from 'assets/svg/skills/docker.svg';

//import figma from 'assets/svg/skills/figma.svg';
//import firebase from 'assets/svg/skills/firebase.svg';


import git from 'assets/svg/skills/git.svg';

import html from 'assets/svg/skills/html.svg';

//import java from 'assets/svg/skills/java.svg';
import javascript from 'assets/svg/skills/javascript.svg';

//import materialui from 'assets/svg/skills/materialui.svg';

//import mysql from 'assets/svg/skills/mysql.svg';
//import nextJS from 'assets/svg/skills/nextJS.svg';

import react from 'assets/svg/skills/react.svg';

//import tailwind from 'assets/svg/skills/tailwind.svg';

import typescript from 'assets/svg/skills/typescript.svg';

import sass from 'assets/svg/skills/sass.svg';

export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        
        case 'sass':
            return sass;
        case 'html5':
            return html;
        
        case 'css3':
            return css;
        
        case 'javascript':
            return javascript;
        
        case 'react':
            return react;
        
        case 'typescript':
            return typescript;
        
        case 'github':
            return git;
        
       
        
        default:
            break;
    }
}
