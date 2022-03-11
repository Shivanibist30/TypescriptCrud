import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Newusers from '../components/addNewUser/newUser';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import puppeteer from 'puppeteer-core';
import { Simulate } from 'react-dom/test-utils';

jest.mock('../components/addNewUser/newUser',()=>jest.fn());
const mockFn=jest.fn();


expect.extend({toMatchImageSnapshot});
const browserPath="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
Enzyme.configure({adapter:new Adapter()});

describe('testing new user component',()=>{
    it("Rendering New user component",()=>{
        const rendred=shallow(<Newusers/>)
        console.log(rendred)  
    });
    // it("checking for div element",()=>{
    //     const wrapper=shallow(<Newusers/>)
    //     expect(wrapper.find('input')).toBeFalsy()
    // });
    it("checking for input element",()=>{
        const wrapper=shallow(<Newusers/>)
        expect(wrapper.find('input')).toBeTruthy()
    });

    it("snapshot testing",()=>{
        const wrapper=shallow(<button name='addUser' onClick={mockFn}/>);
        wrapper.simulate('click')
        console.log('Simulate function in new user')
        expect(mockFn).toMatchSnapshot()
    });


    jest.setTimeout(300000)
    it('create add user snapshot',async()=>{
    const browser = await puppeteer.launch({executablePath:browserPath,});
    const page=await browser.newPage();
    await page.goto('http://localhost:3000/newusers');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot()
});
    
});