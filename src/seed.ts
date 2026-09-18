import prisma from "./lib/prisma";

async function main() {
  // Create patients
  const patient1 = await prisma.patient.create({
    data: {
      name: "Ananya Sharma",
      email: "ananya@example.com",
      phone: "9876543210",
      dateOfBirth: new Date("2002-05-15"),
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: "Rahul Menon",
      email: "rahul@example.com",
      phone: "9876543211",
      dateOfBirth: new Date("1999-08-20"),
    },
  });

  // Create doctors
  const doctor1 = await prisma.doctor.create({
    data: {
      name: "Dr. Priya Nair",
      specialty: "Cardiology",
      email: "priya@example.com",
    },
  });

  const doctor2 = await prisma.doctor.create({
    data: {
      name: "Dr. Arjun Kumar",
      specialty: "Neurology",
      email: "arjun@example.com",
    },
  });

  // Create appointments
  await prisma.appointment.create({
    data: {
      patientId: patient1.id,
      doctorId: doctor1.id,
      appointmentDate: new Date("2026-12-01T10:00:00"),
      status: "scheduled",
      notes: "Regular check-up",
    },
  });

  await prisma.appointment.create({
    data: {
      patientId: patient2.id,
      doctorId: doctor2.id,
      appointmentDate: new Date("2026-12-02T11:00:00"),
      status: "scheduled",
      notes: "Initial consultation",
    },
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });