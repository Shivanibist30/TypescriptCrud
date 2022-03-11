import Enzyme,{mount,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Allusers from '../components/allUsers/allUsers';

import {toMatchImageSnapshot} from 'jest-image-snapshot';
import puppeteer from 'puppeteer-core';

// jest.mock('../components/allUsers/allUsers',()=>jest.fn());
// const mockFn=jest.fn();


const browserPath="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
Enzyme.configure({adapter:new Adapter()});
expect.extend({toMatchImageSnapshot});
describe('testing all user components',()=>{
    test("Check rendering",()=>{
        const rendred=shallow(<Allusers/>)
        console.log(rendred)  
    });
    it("Test Button element",()=>{
        const wrapper=shallow(<div/>);
        expect(wrapper.find('button')).toBeTruthy()
    });
    it("Test Table presence",()=>{
        const wrapper=shallow(<div/>);
        expect(wrapper.find('.table-head')).toBeTruthy()
    });

    // it("Test Table element",()=>{
    //     const wrapper=shallow(<Allusers/>);
    //     expect(wrapper.find('column')).toBe(null)
    // });

    it("Test Table columns",()=>{
        const wrapper=shallow(<Allusers/>);
        expect(wrapper.children('column')).not.toBeNull()
    });
    // it("Test Heading",()=>{
    //     const wrapper=shallow(<Allusers/>);
    //     expect(wrapper.find('table-head')).tobe('ALL USERS')
    // })
    // it("snapshot testing",()=>{
    //     const wrapper=shallow(<button name='deleteiiiao8' onClick={mockFn}/>);
    //     wrapper.simulate('click')
    //     expect(mockFn).toMatchSnapshot()
    // });


    jest.setTimeout(30000)
    it('create all user snapshot',async()=>{
    const browser = await puppeteer.launch({executablePath:browserPath,});
    const page=await browser.newPage();
    await page.goto('http://localhost:3000');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot()
    })

})