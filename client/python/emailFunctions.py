import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

# getEmailInformation('taymosier@gmail.com', 'taymosier@gmail.com', 'hello', 'test.xlsx')


def getEmailInformation(user, pwd, destination, subjectTitle, file):
    print('Getting email information')
    email_user = user
    email_send = destination
    password = pwd
    subject = subjectTitle
    filename = file
    generateEmail(email_user, password, email_send, subject, filename)

# email_user = 'taymosier@gmail.com'
# email_send = 'taymosier@gmail.com'
# subject = 'Python!'

def generateEmail(user, pwd, destination, subject, filename):
    print('email info received')
    msg = MIMEMultipart()
    msg['From'] = user
    msg['To'] = destination
    msg['Subject'] = subject
    file = filename
    body = """ Hi """
    attachment = open(file, 'rb')
    msg.attach(MIMEText(body, 'plain'))
    part = MIMEBase('application', 'octet-stream')
    part.set_payload((attachment).read())
    encoders.encode_base64(part)
    part.add_header('Content-Disposition', "attachment; filename=" + file)
    msg.attach(part)
    text = msg.as_string()
    sendEmail(user, pwd, destination, text)


def sendEmail(user, pwd, destination, message):
    print('email generated')
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(user, pwd)
    print('Username/PW accepted')
    server.sendmail(user, destination, message)
    server.quit()





# sender, receiver, message
# user_email,

# try:
#     smtpObj = smtplib.SMTP('localhost')
#     smtpObj.sendmail(sender, receivers, message)
#     print('Successfully sent email')
# except: SMTPException:
#     print "Error: unable to send mail"
