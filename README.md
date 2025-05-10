# A little bit about myself 🚀

## Background
I started my journey in software engineering not with a bang, but with a quiet "what if?" While working in the banking sector, I noticed that the app they were using had a lot of room for improvement, and I said to myself, "If I were the one building it, I could make it better." This sparked my interest in coding. I began to learn by myself, and my interest grew into a desire to use my tech skills to give back, to help spark creativity and bring people together.

## Turning point
When the pandemic hit, it became crystal clear to me that technology wasn't just a hobby—it was a powerful tool for bringing people together and making a difference. To make it a clear statement, I joined Codesmith, an intensive bootcamp that sharpened both my technical and collaborative abilities. 

I've worked on open-source projects and with non-profits, which has helped me become really good at working with all kinds of people and explaining complex ideas in ways everyone can understand. I've worked on both the front end and the back end, as well as on testing, so I'm ready for any challenge that comes my way.

## One more thing
My goal is to use my tech skills to give back, to help spark creativity and bring people together. I'm currently diving into Design Patterns and Generative AI, and exploring some interesting ideas.

## Testing

The project uses Vitest for testing React components. Tests are located in `src/__tests__` for main components and in `src/components/__tests__` for individual components.

### Running Tests

To run the tests, use the following commands:

```bash
# Run tests once
npm test

# Run tests in watch mode (during development)
npm run test:watch
```

### Test Coverage

The tests cover the rendering and functionality of all components:
- Header component
- SectionHeading component
- SkillCard component
- SkillIcon component
- ProjectCard component
- ExperienceCard component
- FooterIcon component
- App component (integration tests)

Each component test verifies that props are correctly passed down and rendered in the DOM.