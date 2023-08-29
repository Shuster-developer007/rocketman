// vite.config.js
import { defineConfig } from "file:///C:/Development/Frontend/rocketman-front/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Development/Frontend/rocketman-front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src", "components"),
      "@pages": resolve("src", "pages"),
      "@images": resolve("public", "assets", "images"),
      "@api": resolve("src", "Api"),
      "@apps": resolve("src", "apps")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxEZXZlbG9wbWVudFxcXFxGcm9udGVuZFxcXFxyb2NrZXRtYW4tZnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXERldmVsb3BtZW50XFxcXEZyb250ZW5kXFxcXHJvY2tldG1hbi1mcm9udFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovRGV2ZWxvcG1lbnQvRnJvbnRlbmQvcm9ja2V0bWFuLWZyb250L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cGx1Z2luczogW3JlYWN0KCldLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdCdAJzogcmVzb2x2ZSgnc3JjJyksXHJcblx0XHRcdCdAY29tcG9uZW50cyc6IHJlc29sdmUoJ3NyYycsICdjb21wb25lbnRzJyksXHJcblx0XHRcdCdAcGFnZXMnOiByZXNvbHZlKCdzcmMnLCAncGFnZXMnKSxcclxuXHRcdFx0J0BpbWFnZXMnOiByZXNvbHZlKCdwdWJsaWMnLCAnYXNzZXRzJywgJ2ltYWdlcycpLFxyXG5cdFx0XHQnQGFwaSc6IHJlc29sdmUoJ3NyYycsICdBcGknKSxcclxuXHRcdFx0J0BhcHBzJzogcmVzb2x2ZSgnc3JjJywgJ2FwcHMnKSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1MsU0FBUyxvQkFBb0I7QUFDNVUsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxRQUFRLEtBQUs7QUFBQSxNQUNsQixlQUFlLFFBQVEsT0FBTyxZQUFZO0FBQUEsTUFDMUMsVUFBVSxRQUFRLE9BQU8sT0FBTztBQUFBLE1BQ2hDLFdBQVcsUUFBUSxVQUFVLFVBQVUsUUFBUTtBQUFBLE1BQy9DLFFBQVEsUUFBUSxPQUFPLEtBQUs7QUFBQSxNQUM1QixTQUFTLFFBQVEsT0FBTyxNQUFNO0FBQUEsSUFDL0I7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
