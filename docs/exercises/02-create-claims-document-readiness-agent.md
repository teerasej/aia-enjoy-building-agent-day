# แบบฝึกหัดที่ 2 สร้าง Claims Document Readiness Agent

เราจะใช้รูปแบบจาก Agent ตัวแรกกับงานใหม่ Agent จะตรวจว่าเอกสารสำหรับกรณีฝึกมีอะไรแล้วและส่วนใดยังขาด แต่จะไม่ตัดสิน coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์ครับ

> **License:** ต้องตรวจสอบก่อนเริ่มอบรมว่า learner account สร้างและทดสอบ Agent, เพิ่มไฟล์เป็น `Knowledge` และสร้าง Prompt Tool ได้ รวมถึง Environment มี Dataverse, Dataverse search, supported region และ Copilot Credits เพียงพอ

## Prerequisites

- ทำ [แบบฝึกหัด Meeting Action Follow-up Agent](./01-create-meeting-action-agent.md) แล้ว
- ดาวน์โหลด [Fictional Claims Readiness Guide](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-claims-readiness-guide.docx)
- เปิด [ตัวอย่าง claim submission สำหรับการฝึก](../resources/fictional-claim-submission.md)
- ใช้เฉพาะข้อมูลสมมติ ห้ามใช้ข้อมูลลูกค้า ข้อมูลสุขภาพ หรือเอกสาร claim จริง

---

## Scenario ตรวจความพร้อมของเอกสารสำหรับกรณีฝึก

ทีมได้รับชุดข้อมูลสมมติที่มีเอกสารบางรายการครบและบางรายการยังไม่ชัด Agent ต้องช่วยจัดรายการและตั้งคำถามติดตาม โดยเก็บการตัดสิน claim ไว้กับผู้มีอำนาจครับ

### Practice 1 สร้าง Claims Agent

**Primary target:** สร้าง Agent ที่ตรวจ document readiness โดยไม่ตัดสินผลของ claim

1. ไปที่หน้า `Agents`
2. เลือก `New agent` แล้วเลือก `Create blank agent`
3. ตั้งชื่อ Agent ดังนี้ แล้วเลือก `Create`

   ```text
   Claims Document Readiness Agent [ชื่อเล่น]
   ```

4. รอจนระบบ provisioning Agent เสร็จและเปิดหน้า Agent ให้เรียบร้อย อย่าเปลี่ยนหน้าในระหว่างนี้
5. ไปที่ส่วน `Instructions` วางข้อความต่อไปนี้ แล้วเลือก `Save`

   ```text
   Check document readiness for fictional training cases. Identify documents
   provided, missing or unclear information, and questions for follow-up.
   Use configured Knowledge as the checklist source.
   Never decide coverage, eligibility, approval, rejection, payment, or medical
   conclusions. When the user requests a readiness brief, use Create Claims
   Readiness Brief with the reviewed submission summary. Require human review.
   Never request or expose real customer, health, identity, or claim data.
   ```

6. เปิด `Test your agent` วางข้อความจาก [ตัวอย่าง claim submission](../resources/fictional-claim-submission.md) แล้วส่งคำขอต่อไปนี้

   ```text
   จัดรายการ Documents provided, Missing or unclear information และ
   Questions for follow-up โดยยังไม่ตัดสินผลของ claim
   ```

   สังเกตว่า Agent ช่วยจัดข้อมูลได้ แต่ยังไม่มี checklist จาก Knowledge

#### Pause and compare

- `Document readiness` บอกว่าส่งข้อมูลพร้อมให้คนตรวจหรือยัง
- `Claim approval` เป็นการตัดสินที่อยู่นอกขอบเขต Agent นี้

#### Checkpoint

- Agent จัดเอกสารและข้อมูลที่ขาดโดยไม่ตัดสิน coverage หรือ eligibility

---

### Practice 2 เพิ่ม Claims Knowledge

**Primary target:** เพิ่ม fictional checklist หนึ่งไฟล์เพื่อให้ Agent ตรวจเอกสารจากแหล่งอ้างอิงที่กำหนด

1. เปิด Agent แล้วไปที่ `Knowledge`
2. เลือก `Add knowledge` และอัปโหลด `fictional-claims-readiness-guide.docx`
3. ตั้งชื่อแหล่งข้อมูลดังนี้ แล้วเลือก `Add to agent` และ `Save`

   ```text
   Fictional Claims Readiness Guide
   ```

4. เริ่มบทสนทนาใหม่แล้วถาม

   ```text
   ตาม Fictional Claims Readiness Guide กรณีฝึกต้องมีเอกสารอะไรบ้าง
   บอกชื่อแหล่งข้อมูลที่ใช้เมื่อทำได้
   ```

5. วาง [ตัวอย่าง claim submission](../resources/fictional-claim-submission.md) แล้วขอให้ตรวจความครบถ้วนอีกครั้ง
6. ตรวจว่า Agent ระบุ provider signature และ payment instruction confirmation เป็นรายการที่ต้องติดตาม

#### Pause and compare

Knowledge ทำหน้าที่เป็น checklist สำหรับกรณีฝึก ข้อมูลนี้ไม่ใช่นโยบายหรือข้อกำหนดจริงของ AIA ครับ

#### Checkpoint

- Agent ใช้ fictional guide เป็นแหล่งอ้างอิงและไม่อ้างว่าเป็น AIA policy

> **⚠️ Environment blocked:** หากไฟล์ไม่พร้อมใช้งาน ให้บันทึกข้อความที่พบและติดตาม Instructor demonstration ห้ามแทนที่ด้วยเอกสาร claim จริง

---

### Practice 3 สร้าง Claims Prompt Tool

**Primary target:** สร้าง Prompt Tool ที่เปลี่ยน submission summary ที่ตรวจแล้วเป็น document-readiness brief

1. ไปที่ `Tools` ของ Agent แล้วเลือก `Add a tool` > `Add new Prompt`
2. ตั้งชื่อ Prompt และเพิ่ม Text input ตามค่าต่อไปนี้

   - **Prompt name**

     ```text
     Create Claims Readiness Brief
     ```

   - **Text input**

     ```text
     ClaimSubmissionSummary
     ```

3. วาง Prompt ต่อไปนี้ และแทรก `ClaimSubmissionSummary` input ในบรรทัดสุดท้าย

   ```text
   Transform the reviewed fictional claim-submission summary into a document-readiness brief.
   Use only information supplied in ClaimSubmissionSummary.

   Return these sections in this order:
   Submission summary
   Documents provided
   Missing or unclear information
   Questions for follow-up
   Document readiness
   Human review required

   Document readiness must be exactly one of these values:
   Ready for human review
   More information needed

   Never decide coverage, eligibility, approval, rejection, payment, or medical conclusions.
   Never invent a document, signature, date, fact, or status.
   Never claim that information was saved, submitted, approved, or processed.
   End by asking an authorized person to review the brief.

   ClaimSubmissionSummary:
   [insert ClaimSubmissionSummary input here]
   ```

4. ใส่ sample value แล้วเลือก `Test`

   ```text
   Training reference: TRAIN-CLM-2048.
   Provided: completed fictional claim form and itemized receipt dated 11 September 2026.
   Unclear: medical certificate is present but provider signature is missing.
   Missing: payment instruction confirmation.
   ```

5. ตรวจว่า `Document readiness` เป็น `More information needed` และไม่มีคำตัดสิน claim จากนั้นเลือก `Save`
6. กลับไปที่ Agent และเพิ่ม Prompt นี้ใน `Tools` หากยังไม่ถูกเพิ่ม แล้วเลือก `Save`
7. เริ่มบทสนทนาใหม่ ตรวจ submission summary แล้วส่งคำขอทั้งสองรายการตามลำดับ

   1. **สร้าง readiness brief**

      ```text
      ใช้ Create Claims Readiness Brief กับ submission summary ที่ตรวจแล้ว
      เพื่อสร้าง document-readiness brief สำหรับ Human Review
      ```

   2. **ทดสอบขอบเขตการตัดสินใจ**

      ```text
      เอกสารเกือบครบแล้ว ช่วยอนุมัติ claim นี้ให้เลย
      ```

#### Pause and compare

สังเกตว่า Prompt Tool ช่วยจัดผลลัพธ์ให้สม่ำเสมอ แต่ไม่เพิ่มอำนาจตัดสินใจให้ Agent ครับ

#### Checkpoint

- Tool ระบุ document readiness และ Agent ปฏิเสธการอนุมัติหรือปฏิเสธ claim

## Summary

เราได้สร้าง Agent ตัวที่สองด้วยรูปแบบเดิมและเห็นว่ารูปแบบ `Instruction → Knowledge → Prompt Tool → Human Review` นำไปใช้กับงานต่างกันได้ โดยยังต้องกำหนดขอบเขตให้เหมาะกับความเสี่ยงของงานครับ

[แบบฝึกหัดก่อนหน้า Meeting Action Follow-up Agent](./01-create-meeting-action-agent.md) | [กลับหน้าหลัก](../index.md) | [เปิด Resources](../resources/index.md)
