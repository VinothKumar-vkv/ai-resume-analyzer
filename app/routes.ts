import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),

    // Handle /resume (no id) - could redirect or show a placeholder page
    route('/resume', 'routes/resumeIndex.tsx'),

    // Handle /resume/:id
    route('/resume/:id', 'routes/resume.tsx'),

    route('/wipe', 'routes/wipe.tsx'),
] satisfies RouteConfig;
