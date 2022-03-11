import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Edituser from '../components/editUsers/editUser';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import puppeteer from 'puppeteer-core';

jest.mock('../components/editUsers/editUser',()=>jest.fn());
const mockFn=jest.fn();
expect.extend({toMatchImageSnapshot});
Enzyme.configure({adapter:new Adapter()});
const browserPath="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

describe('testing edit user component',()=>{
    it("Rendering Edituser component",()=>{
        const wrapper=shallow(<Edituser/>)
        console.log(wrapper)  
    });
    it("checking for div",()=>{
        const wrapper=shallow(<Edituser/>)
        expect(wrapper.contains('div'))
    });

    it("snapshot testing",()=>{
        const wrapper=shallow(<button name='update' onClick={mockFn}/>);
        wrapper.simulate('click')
        expect(mockFn).toMatchSnapshot()
    });

    // it('cancel event',()=>{
    //     const mockCallback=jest.fn();
    //     const wrapper=shallow(<Edituser/>)
    //     wrapper.find('.cancelButton').simulate('click')
        
    //     expect(mockCallback).toHaveBeenCalled()

    // });

    jest.setTimeout(300000)
    it('create edit user snapshot',async()=>{
    const browser = await puppeteer.launch({executablePath:browserPath,});
    const page=await browser.newPage();
    await page.goto('http://localhost:3000/editUser/');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot()
    });
});