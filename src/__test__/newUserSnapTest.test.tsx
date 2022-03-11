import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';



const baseUrl='http://localhost:3000/newusers';

jest.mock('../components/addNewUser/newUser',()=>jest.fn());
const mockFn=jest.fn()
Enzyme.configure({adapter:new Adapter()});
let browser;
// const AssertMatchingImageAndSave = async function () {
//     const image = await page.screenshot();
//     expect(image).toMatchImageSnapshot({
//         failureThreshold: 0,
//         failureThresholdType: 'percent',
//         updatePassedSnapshot: process.env.updateAlways === 'true',
        
//     });
// };

// beforeAll(async()=>{
//     browser = await puppeteer.launch({executablePath:browserPath,
//         headless: false,
//     });
//     const page=await browser.newPage();
//     await page.setViewport({width:960,height:1080});
//     return page;
// })

describe('snapshot newuser',()=>{

    it("snapshot testing",()=>{
        const wrapper=shallow(<button name='addUser' onClick={mockFn}/>);
        wrapper.simulate('click')
        expect(mockFn).toMatchSnapshot()
    });
    

    

});