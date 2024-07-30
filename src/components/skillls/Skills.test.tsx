import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

//getAllByRole
describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript']
    //Get ul
    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    });
    //Get li 
    test('renders list of skills', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })
    test('renders login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', { name: /login/i })
        expect(loginButton).toBeInTheDocument()
    })

    //Writing test for an element that doesn't exist in the DOM
    test('Start learning is not rendered', () => {
        render(<Skills skills={skills} />)
        const learningButton = screen.queryByRole('button', { name: 'Start learning' })
        expect(learningButton).not.toBeInTheDocument()
    });

    // Test for a button that does exist in the DOM at first but becomes available later
    test('Start Learning button is eventually displayed', async () => {
        render(<Skills skills={skills} />);
        const startLearningButton = await screen.findByRole(
            'button',
            {
                name: 'Start learning',
            },
            {
                timeout: 2000,
            }
        );
        expect(startLearningButton).toBeInTheDocument();
    });
})

