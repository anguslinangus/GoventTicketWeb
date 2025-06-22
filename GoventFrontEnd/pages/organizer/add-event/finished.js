import React from 'react'
import OrganizerLayout from '@/components/layout/organizer-layout'

export default function Finished() {
  return (
    <OrganizerLayout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>活動建立完成</h1>
            <p>恭喜！您的活動已成功建立。</p>
          </div>
        </div>
      </div>
    </OrganizerLayout>
  )
}
