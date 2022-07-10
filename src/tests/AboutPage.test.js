import { render, cleanup } from '@testing-library/react';
import  About  from '../components/Pages/about_page/about'

jest.mock('../components/pages/about_page/about')

beforeEach(cleanup);

test('Testing if About page is created', () => {
    var component = render(<About />);
    expect(component).toBeTruthy();
});
