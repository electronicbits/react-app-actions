module.exports = {
    branches: "main",
    respositoryUrl: "https://github.com/electronicbits/react-app-actions",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-note-generator',
        '@seamantic-release/npm',
        '@semantic-release/github'
    ]
}
