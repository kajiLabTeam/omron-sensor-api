/*
  Warnings:

  - Made the column `area` on table `sensor_data` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `sensor_data` MODIFY `area` VARCHAR(191) NOT NULL;
