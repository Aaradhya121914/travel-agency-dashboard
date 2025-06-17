// ##What This Means for the App-

// When a user visits a path like /dashboard, the app will:

// Render the layout from admin-layout.tsx.

// Inside it, render the dashboard.tsx component.

// This promotes layout-based routing, where multiple pages (like dashboard, settings, etc.) can share a common layout.
import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx",[
        route('dashboard',"routes/admin/dashboard.tsx"),
        route('all-users',"routes/admin/all-users.tsx")

    ])
] satisfies RouteConfig;