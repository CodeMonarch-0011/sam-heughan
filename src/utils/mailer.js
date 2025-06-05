export function openMail (mail) {
    window.location.href = `https://mail.google.com/mail/?view=cm&to=${mail}`
}

export function openSocial (link) {
    window.location.href = `${link}`
}

export function navigate (id) {
    window.location.href = id
} 