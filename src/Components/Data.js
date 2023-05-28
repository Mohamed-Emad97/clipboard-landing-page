import google from "../assets/images/logo-google.png";
import hp from "../assets/images/logo-hp.png";
import ibm from "../assets/images/logo-ibm.png";
import vector from "../assets/images/logo-vector-graphics.png";
import microsoft from "../assets/images/logo-microsoft.png";

import blacklist from "../assets/images/icon-blacklist.svg";
import preview from "../assets/images/icon-preview.svg";
import text from "../assets/images/icon-text.svg";


export const pics =[
    google,
    ibm,
    microsoft,
    hp,
    vector
] 

export const servicesData = [
    {
        icon: blacklist,
        title: "Create blacklists",
        desc: `
        Ensure sensitive information never makes its
        way to your clipboard by excluding certain 
        sources.
        `
    },
    {
        icon: text,
        title: "Plain text snippets",
        desc: `
        Remove unwanted formatting from copied text
        for a consistent look.
        `,
    },
    {
        icon: preview,
        title: "Sneak preview",
        desc: `
        Quick preview of all snippets on your clipboard
        for easy access.
        `,
    }
]

export const aboutList = [
    {
        title: `Quick Search`,
        desc: `Easily search your snippets contant,
        category, web address, application, and more.
        `
    },
    {
        title: `iCloud Sync`,
        desc: `
        Instantly saves and syncs snippets across all 
        your devices.
        `
    },
    {
        title: `Complete History`,
        desc: `
        Retrieve any snippets from the first moment 
        you started using the app.
        `
    }
]