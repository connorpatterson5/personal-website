import { ResumeComponent } from './resume.component'

describe('ResumeComponent getResumeDownloadLink', () => {
  it('returns URL based on base href', () => {
    const fn = ResumeComponent.prototype.getResumeDownloadLink
    const result = fn.call({ baseHref: 'https://example.com/' })
    expect(result).toContain('ConnorPattersonResume2025.pdf')
  })
})
