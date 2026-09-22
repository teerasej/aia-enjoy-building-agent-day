# แบบฝึกหัดที่ 3 สร้าง Follow-up Brief ด้วย Prompt Tool

เราจะสร้าง `Create Meeting Follow-up Brief` เป็น Prompt Tool ภายใน Copilot Studio เพื่อจัดสรุปประชุมที่ตรวจแล้วให้อยู่ในรูปแบบเดียวกันทุกครั้ง เปรียบเหมือนมีแบบฟอร์มมาตรฐานอยู่บนโต๊ะ ผู้ช่วยนำข้อมูลมาเรียงให้ แต่คนยังเป็นผู้ตรวจความถูกต้องก่อนนำไปใช้ครับ

> **License:** ต้องตรวจสอบก่อนเริ่มอบรมว่า Environment อยู่ใน supported region, ติดตั้ง Dataverse แล้ว, learner account มี maker permission และมี Copilot Credits เพียงพอสำหรับการสร้างและทดสอบ Prompt Tool

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./01-create-meeting-action-agent.md) แล้ว
- ผู้สอนยืนยันว่าจะใช้เส้นทาง Hands-on หรือ Instructor demonstration
- เปิด [ตัวอย่างผลลัพธ์ Meeting Action Summary](../resources/expected-meeting-summary.md)
- ใช้เฉพาะข้อมูลสมมติที่เตรียมไว้

เส้นทางของเราคือ **Meeting notes → Agent summary → Prompt Tool → Follow-up brief → Human review** โดยไม่มี Connector หรือ external action

---

## Scenario จัดสรุปประชุมให้อยู่ในรูปแบบมาตรฐาน

Agent สรุปข้อเท็จจริงจากบันทึกประชุมก่อน จากนั้น Prompt Tool จะรับสรุปที่ตรวจแล้วและจัดเป็น brief ที่มีหัวข้อกับ action tracker เหมือนกันทุกครั้ง

### Practice 1 สร้าง Create Meeting Follow-up Brief

**Primary target:** สร้าง Prompt Tool ที่รับ meeting summary หนึ่งชุดและคืน follow-up brief ตามโครงสร้างที่กำหนด

1. เปิด `Meeting Action Follow-up Assistant [ชื่อเล่น]` แล้วไปที่ `Tools`
2. เลือก `Add a tool` > `Add new Prompt`
3. ตั้งชื่อ Prompt ดังนี้

   ```text
   Create Meeting Follow-up Brief
   ```

4. ใน Prompt editor ให้เพิ่ม Text input หนึ่งรายการและตั้งชื่อดังนี้

   ```text
   MeetingSummary
   ```

5. วาง Prompt ต่อไปนี้ และแทรก `MeetingSummary` จากรายการ input ตรงตำแหน่งที่ระบุ

   ```text
   Transform the reviewed synthetic meeting summary below into a standardized
   follow-up brief. Use only information in MeetingSummary.

   Return exactly these sections in this order:
   Executive summary
   Confirmed decisions
   Action tracker
   Missing information
   Open questions
   Human review required

   Keep Executive summary to no more than three bullets.
   Format Action tracker as a Markdown table with these columns:
   Task | Owner | Due date | Review status
   Preserve every supplied person name and date exactly.
   If an owner or due date is absent or conflicting, show that it needs review.
   Never turn a suggestion into a decision and never invent missing information.
   Never claim that information was saved, delivered, approved, or completed.
   End by asking a person to review and correct the brief before use.

   MeetingSummary:
   [insert MeetingSummary input here]
   ```

6. ใส่ sample value สำหรับ `MeetingSummary` ดังนี้

   ```text
   Decisions:
   - Use the shared request form as the main channel for the pilot.

   Action items:
   - Mali drafts the pilot announcement by 9 October 2026.
   - Prepare the participant FAQ by 13 October 2026. Owner is not specified.

   Open questions:
   - Who approves request category changes after the pilot?

   Missing information:
   - Owner of the participant FAQ.

   Not a decision:
   - A weekly leaderboard was suggested but not approved.
   ```

7. เลือก `Test` และตรวจว่า output มีครบหกหัวข้อ รวมทั้งตาราง `Action tracker`
8. ตรวจว่า owner ของ participant FAQ ยังเป็นข้อมูลที่ต้อง Review และ weekly leaderboard ไม่อยู่ใน `Confirmed decisions`
9. เลือก `Save`
10. กลับไปที่ Agent แล้วตรวจว่า Tool ถูกเพิ่มใน `Tools` หากยังไม่อยู่ ให้เลือก Prompt นี้และ `Add to agent`
11. ในคำอธิบาย Tool ให้ระบุข้อความต่อไปนี้

   ```text
   Use this tool only when the user asks for a standardized follow-up brief
   after reviewing the meeting summary. Return the review-ready brief only.
   Do not save, send, publish, or perform any external action.
   ```

12. เลือก `Save`

> **⚠️ Environment blocked:** หากไม่พบ Prompt, บันทึกไม่ได้ หรือ Test ไม่ทำงาน ให้จดข้อความที่พบและติดตาม Instructor demonstration ห้ามเปลี่ยนนโยบาย Environment หรือใช้ข้อมูลจริงแทน

#### Checkpoint

- Agent มี Prompt Tool ชื่อ `Create Meeting Follow-up Brief` ที่รับ `MeetingSummary` และ output ไม่เติม owner หรือ decision ที่ไม่มีในข้อมูล

### Practice 2 เรียก Tool จากบทสนทนา

**Primary target:** ให้ Agent เรียก Prompt Tool เพื่อเปลี่ยน meeting summary ที่ตรวจแล้วเป็น follow-up brief สำหรับ Human Review

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่
2. วางบันทึกประชุมจาก [ไฟล์ตัวอย่าง](../resources/fictional-meeting-notes.md) แล้วขอ summary

   ```text
   ช่วยจัดบันทึกประชุมนี้เป็น Decisions, Action items, Open questions
   และ Missing information โดยห้ามเดา owner, due date หรือสถานะการอนุมัติ
   ```

3. ตรวจ summary กับ [ตัวอย่างผลลัพธ์](../resources/expected-meeting-summary.md)
4. เมื่อข้อมูลถูกต้อง ให้ส่งข้อความต่อไปนี้

   ```text
   ใช้ Create Meeting Follow-up Brief กับ meeting summary ที่ตรวจแล้ว
   เพื่อสร้าง standardized follow-up brief สำหรับ Human Review
   ```

5. ตรวจว่า output มี `Executive summary`, `Confirmed decisions`, `Action tracker`, `Missing information`, `Open questions` และ `Human review required`
6. ตรวจว่า action tracker แสดง owner และ due date ตามต้นฉบับ และทำเครื่องหมายรายการที่ข้อมูลยังไม่ครบ
7. ตรวจว่า output ไม่อ้างว่าได้บันทึก ส่ง อนุมัติ หรือทำงานเสร็จแล้ว

#### Checkpoint

- Prompt Tool สร้าง follow-up brief ครบโครงสร้าง โดยรักษาข้อมูลที่ขาดหรือขัดแย้งไว้ให้คน Review

## Summary

เราได้เพิ่มความสามารถแบบใช้ซ้ำให้ Agent โดยยังทำงานอยู่ภายใน Copilot Studio ขั้นต่อไปเราจะทดสอบ reliability, safety และ Human Review ก่อนชม Final Wow demo

[แบบฝึกหัดก่อนหน้า](./02-add-project-knowledge.md) | [กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป ทดสอบและ Review](./04-test-and-review.md)
