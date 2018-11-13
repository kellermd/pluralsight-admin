export default function CourseReducer(state=[], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            debugger;
            return [...state, // spread operator to copy input state and assign the course
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}