module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d54fc46952bad39662731703859c406'),
  },
});
