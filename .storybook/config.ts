import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
const req = requireContext('../src', true, /\.stories\.tsx$/);

/**
 * @tutorial https://medium.com/@pongsatt/how-to-setup-storybook-in-react-typescript-project-ad2516515919
 */

function loadStories(){
    req.keys().forEach(req);
}

configure(loadStories, module);