import React from 'react'
import { makeStyles } from '@material-ui/core'

import { Header } from '~Home/components/Header'
import { Footer } from '~Home/components/Footer'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  main: {
    margin: 'auto',
    maxWidth: '600px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

export default function Page() {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Header />

      <main className={classes.main}>
        <h2>Privacy Policy</h2>

        <p>
          At Linking Bio, accessible from https://www.linkingbio.com, one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains types of information
          that is collected and recorded by Linking Bio and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our Privacy Policy, do
          not hesitate to contact us through email at lucapasquale@hotmail.com
        </p>

        <h3>Log Files</h3>

        <p>
          Linking Bio follows a standard procedure of using log files. These files log visitors when
          they visit websites. All hosting companies do this and a part of hosting services'
          analytics. The information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>

        <h3>Privacy Policies</h3>

        <p>
          You may consult this list to find the Privacy Policy for each of the advertising partners
          of Linking Bio. Our Privacy Policy was created with the help of the{' '}
          <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a> and the{' '}
          <a href="https://www.generateprivacypolicy.com">Generate Privacy Policy Generator</a>.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web
          Beacons that are used in their respective advertisements and links that appear on Linking
          Bio, which are sent directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content that you see on
          websites that you visit.
        </p>

        <p>
          Note that Linking Bio has no access to or control over these cookies that are used by
          third-party advertisers.
        </p>

        <h3>Third Party Privacy Policies</h3>

        <p>
          Linking Bio's Privacy Policy does not apply to other advertisers or websites. Thus, we are
          advising you to consult the respective Privacy Policies of these third-party ad servers
          for more detailed information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these Privacy Policies and
          their links here: Privacy Policy Links.
        </p>

        <p>
          You can choose to disable cookies through your individual browser options. To know more
          detailed information about cookie management with specific web browsers, it can be found
          at the browsers' respective websites. What Are Cookies?
        </p>

        <h3>Children's Information</h3>

        <p>
          Another part of our priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or monitor and guide
          their online activity.
        </p>

        <p>
          Linking Bio does not knowingly collect any Personal Identifiable Information from children
          under the age of 13. If you think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h3>Online Privacy Policy Only</h3>

        <p>
          This Privacy Policy applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or collect in Linking Bio.
          This policy is not applicable to any information collected offline or via channels other
          than this website.
        </p>

        <h3>Consent</h3>

        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and
          Conditions.
        </p>
      </main>

      <Footer />
    </div>
  )
}
